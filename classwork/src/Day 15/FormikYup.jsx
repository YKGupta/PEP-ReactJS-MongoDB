import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikYup = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, "Name must be atleast 3 characters").required("Name is a required field"),
            email: Yup.string().email("Invalid email").required("Email is a required field"),
            password: Yup.string().min(6, "Password must be atleast 6 characters").required("Password is a required field")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <div>
            <h1>Sign Up Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {
                        formik.touched.name && formik.errors.name && (
                            <div style={{color: "red"}}>{formik.errors.name}</div>
                        )
                    }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {
                        formik.touched.email && formik.errors.email && (
                            <div style={{color: "red"}}>{formik.errors.email}</div>
                        )
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {
                        formik.touched.password && formik.errors.password && (
                            <div style={{color: "red"}}>{formik.errors.password}</div>
                        )
                    }
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FormikYup;