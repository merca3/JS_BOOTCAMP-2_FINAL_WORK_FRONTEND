import React from "react";
import { useForm } from "react-hook-form";

function RegisterForm() {
    const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    const Select = React.forwardRef(({ onChange, onBlur, name }, ref) => (
        <>
            <select name={name} ref={ref} onChange={onChange} onBlur={onBlur} className="form-select">
                <option selected disabled>Country*</option>
                <option>Latvia</option>
                <option>Lithuania</option>
                <option>Estonia</option>
                <option>Other</option>
            </select>
        </>
    ));

    return (
        <form className="g-3 text-light" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <input {...register("Username", {
                    required: '  Username is required',
                    minLength: {
                        value: 5,
                        message: '  Username must be min 5 symbols long'
                    }
                })} placeholder="Username*" className="form-control" />
                {errors.Username?.message}
            </div>
            <div className="mb-3">
                <input {...register('email', {
                    required: '  Email is required',
                    pattern: {
                        value:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: '  Please enter a valid Email address',
                    },
                })} placeholder="Email*" className="form-control" />
                {errors.email?.message}
            </div>
            <div className="mb-3">
                <input {...register("Password", {
                    required: '  Password is required',
                    minLength: {
                        value: 8,
                        message: '  Password must be min 8 symbols long'
                    }
                })} type="password" name="Password" placeholder="Password*" className="form-control" />
                {errors.Password?.message}
            </div>
            <div className="mb-3">
                <input {...register("PasswordRepeat", {
                    required: '  Please confirm password!',
                    validate: {
                        matchesPreviousPassword: (value) => {
                            const { Password } = getValues();
                            return Password === value || 'Passwords should match!';
                        },
                    }
                })} type="password" placeholder="Repeat Password*" className="form-control" />
                {errors.PasswordRepeat?.message}
            </div>
            <div className="mb-3">
                <input {...register("FirstName", {
                    required: '  First Name is required',
                    minLength: {
                        value: 2,
                        message: '  First Name must be min 2 symbols long'
                    }
                })} placeholder="First Name*" className="form-control" />
                {errors.FirstName?.message}
            </div>
            <div className="mb-3">
                <input {...register("LastName")} placeholder="Last Name" className="form-control" />
            </div>
            <div className="mb-3">
                <Select label="Country" {...register("Country")} />
                {errors.Country?.type === 'required' && "  Choose Your Country"}
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <label className="form-check-label">Agree to terms and conditions*</label>
                    <input className="form-check-input" type="checkbox" {...register("checkbox", { required: true })} />
                    <div>
                        {errors.checkbox?.type === 'required' && "  You must agree to terms and conditions"}
                    </div>
                </div>
            </div>
            <div className="col-6 d-grid mb-3">
                <input className="text-dark btn btn-info submit" type="submit" value="Submit form" />
            </div>
        </form>
    )
}

export default RegisterForm;