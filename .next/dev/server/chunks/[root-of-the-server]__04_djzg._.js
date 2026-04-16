module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/server/errors/app-error.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppError",
    ()=>AppError
]);
class AppError extends Error {
    statusCode;
    code;
    details;
    constructor(message, statusCode = 500, code = "INTERNAL_ERROR", details){
        super(message);
        this.name = "AppError";
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
    }
}
}),
"[project]/src/server/errors/global-error-handler.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleApiError",
    ()=>handleApiError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$errors$2f$app$2d$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/errors/app-error.ts [app-route] (ecmascript)");
;
;
;
function handleApiError(error) {
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodError"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: {
                code: "VALIDATION_ERROR",
                message: "Invalid request payload.",
                details: error.flatten()
            }
        }, {
            status: 400
        });
    }
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$errors$2f$app$2d$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: {
                code: error.code,
                message: error.message,
                details: error.details
            }
        }, {
            status: error.statusCode
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        error: {
            code: "INTERNAL_ERROR",
            message: "Unexpected server error."
        }
    }, {
        status: 500
    });
}
}),
"[project]/src/server/lib/http-response.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "successResponse",
    ()=>successResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
function successResponse(data, status = 200) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data
    }, {
        status
    });
}
}),
"[project]/src/server/modules/consultation/consultation.schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "consultationCategoryValues",
    ()=>consultationCategoryValues,
    "createConsultationSchema",
    ()=>createConsultationSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const consultationCategoryValues = [
    "FAMILY",
    "CRIMINAL",
    "CIVIL",
    "CORPORATE",
    "LABOR",
    "REAL_ESTATE",
    "OTHER"
];
const createConsultationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(2).max(120),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().regex(/^\+?[0-9\s\-()]{7,20}$/),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(consultationCategoryValues),
    problem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(10).max(1000)
});
}),
"[project]/src/server/services/base.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseService",
    ()=>BaseService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$errors$2f$app$2d$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/errors/app-error.ts [app-route] (ecmascript)");
;
class BaseService {
    fail(message, statusCode, code, details) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$errors$2f$app$2d$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"](message, statusCode, code, details);
    }
    assert(condition, message, statusCode = 400, code = "BAD_REQUEST") {
        if (!condition) {
            this.fail(message, statusCode, code);
        }
    }
}
}),
"[project]/src/server/modules/consultation/consultation.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsultationService",
    ()=>ConsultationService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$services$2f$base$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/services/base.service.ts [app-route] (ecmascript)");
;
class ConsultationService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$services$2f$base$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseService"] {
    constructor(){
        super();
    }
    async bookConsultation(payload) {
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
        const safeEncode = (value)=>{
            let wellFormedValue = "";
            for(let index = 0; index < value.length; index += 1){
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
        const whatsappLink = `https://wa.me/${safeEncode(targetWhatsAppNumber)}` + `?text=${safeEncode(formattedMessage)}`;
        return {
            status: "forwarded",
            channel: "whatsapp",
            whatsappLink
        };
    }
}
}),
"[project]/src/server/modules/consultation/consultation.controller.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsultationController",
    ()=>ConsultationController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$modules$2f$consultation$2f$consultation$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/modules/consultation/consultation.schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$modules$2f$consultation$2f$consultation$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/modules/consultation/consultation.service.ts [app-route] (ecmascript)");
;
;
class ConsultationController {
    service;
    constructor(){
        this.service = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$modules$2f$consultation$2f$consultation$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConsultationService"]();
    }
    async create(request) {
        const payload = await request.json();
        const validatedPayload = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$modules$2f$consultation$2f$consultation$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createConsultationSchema"].parse(payload);
        return this.service.bookConsultation(validatedPayload);
    }
}
}),
"[project]/src/server/security/rate-limit.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enforceRateLimit",
    ()=>enforceRateLimit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$errors$2f$app$2d$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/errors/app-error.ts [app-route] (ecmascript)");
;
const buckets = new Map();
function enforceRateLimit({ key, maxRequests, windowMs }) {
    const now = Date.now();
    const bucket = buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
        buckets.set(key, {
            count: 1,
            resetAt: now + windowMs
        });
        return;
    }
    if (bucket.count >= maxRequests) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$errors$2f$app$2d$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("Too many requests. Please try again later.", 429, "RATE_LIMITED");
    }
    bucket.count += 1;
    buckets.set(key, bucket);
}
}),
"[project]/src/app/api/consultations/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$errors$2f$global$2d$error$2d$handler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/errors/global-error-handler.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$lib$2f$http$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/lib/http-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$modules$2f$consultation$2f$consultation$2e$controller$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/modules/consultation/consultation.controller.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$security$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/security/rate-limit.ts [app-route] (ecmascript)");
;
;
;
;
const controller = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$modules$2f$consultation$2f$consultation$2e$controller$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConsultationController"]();
async function POST(request) {
    try {
        const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$security$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enforceRateLimit"])({
            key: `consultation:${ip}`,
            maxRequests: 5,
            windowMs: 15 * 60 * 1000
        });
        const consultation = await controller.create(request);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$lib$2f$http$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])(consultation, 201);
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$errors$2f$global$2d$error$2d$handler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApiError"])(error);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__04_djzg._.js.map