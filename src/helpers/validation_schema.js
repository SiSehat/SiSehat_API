import Joi from "joi";

const registerSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    username: Joi.string().required(),
    password: Joi.string().min(6).required()
})

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(6).required()
})

const medicineSchema = Joi.object({
    title: Joi.string().lowercase().required(),
    short_desc: Joi.string().lowercase().required(),
    publish_date: Joi.string().required(),
    thumbnail_url: Joi.string(),
    reviewer_name: Joi.string(),
    categories: Joi.string(),
    about: Joi.string().required(),
    kegunaan: Joi.string(),
    rules: Joi.array(),
    warning: Joi.array(),
    disease_related: Joi.array(),
})

const diseaseSchema = Joi.object({
    title: Joi.string().lowercase().required(),
    short_desc: Joi.string().lowercase().required(),
    publish_date: Joi.string().required(),
    thumbnail_url: Joi.string(),
    reviewer_name: Joi.string(),
    categories: Joi.string().lowercase(),
    about: Joi.string().required(),
    obat: Joi.array(),
    medication: Joi.string(),
    symptom: Joi.array(),
    diagonsis: Joi.array(),
})

const symptomFinderSchema = Joi.object({
    symptoms: Joi.array().required()
})

const medicineFinderSchema = Joi.object({
    medicines: Joi.array().required()
})

export {
    loginSchema, registerSchema, medicineSchema,
    diseaseSchema, symptomFinderSchema, medicineFinderSchema
};