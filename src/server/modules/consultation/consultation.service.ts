import { BaseService } from "../../services/base.service";

import { CreateConsultationInput } from "./consultation.schema";

export class ConsultationService extends BaseService {
  constructor() {
    super();
  }

  async bookConsultation(payload: CreateConsultationInput) {
    const whatsappNumber = process.env.LAWYER_WHATSAPP_NUMBER;
    console.log("Current WhatsApp Number:", whatsappNumber);

    if (!whatsappNumber) {
      throw new Error("WhatsApp Number is not configured in environment variables");
    }

    const targetWhatsAppNumber = whatsappNumber.replace(/[^\d]/g, "");
    this.assert(targetWhatsAppNumber.length >= 8, "Invalid WhatsApp destination number.", 500, "WHATSAPP_CONFIG_ERROR");

    const formattedMessage = [
      "⚖️ *طلب استشارة قانونية جديدة*",
      "",
      `*اسم العميل:* ${payload.name}`,
      `*رقم الهاتف:* ${payload.phone}`,
      `*التصنيف القانوني:* ${payload.category}`,
      "*وصف المشكلة:*",
      payload.problem,
      "",
      "--- تم الإرسال من الموقع الرسمي"
    ].join("\n");

    const safeEncode = (value: string) => {
      let wellFormedValue = "";
      for (let index = 0; index < value.length; index += 1) {
        const code = value.charCodeAt(index);
        const isHighSurrogate = code >= 0xd800 && code <= 0xdbff;
        const isLowSurrogate = code >= 0xdc00 && code <= 0xdfff;

        if (isHighSurrogate) {
          const nextCode = value.charCodeAt(index + 1);
          const hasValidLowSurrogate = nextCode >= 0xdc00 && nextCode <= 0xdfff;
          if (hasValidLowSurrogate) {
            wellFormedValue += value[index] + value[index + 1];
            index += 1;
          } else {
            wellFormedValue += "\ufffd";
          }
          continue;
        }

        if (isLowSurrogate) {
          wellFormedValue += "\ufffd";
          continue;
        }

        wellFormedValue += value[index];
      }

      return encodeURIComponent(wellFormedValue);
    };

    const whatsappLink =
      `https://wa.me/${safeEncode(targetWhatsAppNumber)}` + `?text=${safeEncode(formattedMessage)}`;

    return {
      status: "forwarded",
      channel: "whatsapp",
      whatsappLink
    };
  }
}
