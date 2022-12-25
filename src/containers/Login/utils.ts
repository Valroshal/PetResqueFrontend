import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    password: Yup
        .string()
        .min(8, 'Use at least 8 characters. Include both an uppercase\n' +
            'letter and a number')
        .max(20, 'Too Long!')
        .required('Please enter password')
        .matches(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
            'Use at least 8 characters. Include both an uppercase\n' +
            'letter and a number' ),
    email: Yup
        .string()
        .email('Please enter valid email address - yourname@domain.com')
        .required('Please enter valid email address'),
});