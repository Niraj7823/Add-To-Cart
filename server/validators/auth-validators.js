const { z } = require("zod");


const loginSchema = z.object(
    {
        email: z.string({ required_error: "Email is required" })
            .trim()
            .email({ message: "Invalid email format" })
            .min(5, { message: "Email should be at least 5 characters" })
            .max(35, { message: "Email should not be more than 35 characters" }),

        password: z.string({ required_error: "Password is required" })
            .trim()
            .min(7, { message: "Password should be at least 7 characters" })
            .max(255, { message: "Password should not be more than 255 characters" })

    }
)

const signUpSchema = loginSchema.extend({
    userName: z.string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name should be at least 3 characters" })
        .max(20, { message: "Name should not be more than 20 characters" }),


    phone: z.string({ required_error: "Phone number is required" })
        .trim()
        .min(10, { message: "Phone number should be at least 10 characters" })
        .max(15, { message: "Phone number should not be more than 15 characters" }),

});

module.exports = { signUpSchema, loginSchema };
