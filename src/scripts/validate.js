// debug
import JustValidate from "just-validate";

const validate = new JustValidate("#form", {
    errorFieldCssClass: "is-invalid",
});

// FirstName
validate.addField("#lb-Fname", [{
        rule: "required",
        errorMessage: "نام خود را وارد کنید",
    },
    {
        rule: "minLength",
        value: 3,
        errorMessage: "نام خود را به درستی وارد کنید",
    },
    {
        rule: "maxLength",
        value: 30,
        errorMessage: "نام خود را به درستی وارد کنید",
    },
]);

// LastName
validate.addField("#lb-Lname", [{
        rule: "required",
        errorMessage: "نام خانوادگی خود را وارد کنید",
    },
    {
        rule: "minLength",
        value: 3,
        errorMessage: "نام خانوادگی خود را به درستی وارد کنید",
    },
    {
        rule: "maxLength",
        value: 30,
        errorMessage: "نام خانوادگی خود را به درستی وارد کنید",
    },
]);

// Age
validate.addField("#lb-Age", [{
        rule: "required",
        errorMessage: "سن خود را وارد کنید",
    },
    {
        rule: "minLength",
        value: 18,
        errorMessage: "سن شما از حد مجاز پایین تر است",
    },
    {
        rule: "maxLength",
        value: 70,
        errorMessage: "سن شما از حد مجاز بالا تر است",
    },
]);

// National Code
validate.addField("#lb-NationalCode", [{
        rule: "required",
        errorMessage: "کد ملی خود را وارد کنید",
    },
    {
        rule: "minLength",
        value: 9,
        errorMessage: "کد ملی خود را به درستی وارد کنید",
    },
    {
        rule: "maxLength",
        value: 11,
        errorMessage: "کد ملی خود را به درستی وارد کنید",
    },
]);

// PhoneNumber
validate.addField("#lb-Pnumber", [{
        rule: "required",
        errorMessage: "شماره تماس  را وارد کنید",
    },
    {
        rule: "minLength",
        value: 11,
        errorMessage: "شماره تماس خود را به درستی وارد کنید",
    },
    {
        rule: "maxLength",
        value: 11,
        errorMessage: "شماره تماس خود را به درستی وارد کنید",
    },
]);

// Email
validate.addField("#lb-E-mail", [{
        rule: "required",
        errorMessage: "ایمیل را وارد کنید",
    },
    {
        rule: "email",
        errorMessage: "ایمیل را به درستی وارد کنید",
    },
]);


// Password
validate.addField("#lb-psw", [{
        rule: "required",
        errorMessage: "رمزعبور  را وارد کنید",
    },
    {
        rule: "minLength",
        value: 8,
        errorMessage: "رمزعبور را به درستی وارد کنید",
    },
    {
        rule: "maxLength",
        value: 10,
        errorMessage: "رمزعبور را بین 8 تا 10 کارکتر را انتخاب کنید",
    },
]);

// Confirm Password
validate.addField("#lb-CnPsw", [{
        rule: "required",
        errorMessage: "رمزعبور خود را تایید کنید",
    },
    {
        validator: (value, fields) => {
            if (fields["#lb-CnPsw"] && fields["#lb-psw"].elem) {
                const repeatPasswordValue = fields["#lb-psw"].elem.value;

                return value === repeatPasswordValue;
            }

            return true;
        },
        errorMessage: "رمزعبور تایید شده با رمزعبور انتخابی شما همخوانی ندارد",
    },
]);

validate.onSuccess((DefinitionBox) => {
    const DefinitionBox = document.getElementById("AccountDefinitionBox");
    DefinitionBox.style.display = "none";
});