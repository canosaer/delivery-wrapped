import React from 'react'
import AccountScreen from '../components/AccountScreen'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export default function Gift() {

    const SignupSchema = Yup.object().shape({
        recipient: Yup.string().required('Required'),
        street: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        state: Yup.string()
            .min(2, '2 letters')
            .max(2, '2 letters')
            .required('Required'),
        zip: Yup.string()
            .matches(/^[0-9]+$/, "numeric")
            .min(5, '5 digits')
            .max(5, '5 digits')
            .required('Required'),
      });

    return(
        <main className="gift mom-mode">
            <AccountScreen />
            <section className="gift__container">
                <div className="gift__content">
                    <h1 className="gift__heading">Congrats!</h1>
                    <p className="gift__text">You deserve every bit of happiness that being a new mom will bring you. Enter your address for a gift from Spotify to celebrate the occasion!</p>
                    
                    <Formik
                        initialValues={{
                            recipient: '',
                            street: '',
                            city: '',
                            state: '',
                            zip: '',
                        }}
                        validationSchema={SignupSchema}
                        // onSubmit={}}
                        >
                        {({ errors, touched }) => (
                            <Form className="address-form">
                                <label className="address-form__label address-form__label_name" htmlFor="recipient">Name</label>
                                <Field className="address-form__input address-form__input_name" name="recipient" />
                                <div className={errors.recipient && touched.recipient ? "address-form__error address-form__error_name" : "address-form__error address-form__error_name transparent"}>{errors.recipient}</div>
                                <label className="address-form__label address-form__label_street" htmlFor="street">Street</label>
                                <Field className="address-form__input address-form__input_street" name="street" />
                                <div className={errors.street && touched.street ? "address-form__error address-form__error_street" : "address-form__error address-form__error_street transparent"}>{errors.street}</div>
                                <label className="address-form__label address-form__label_city" htmlFor="city">City</label>
                                <Field className="address-form__input address-form__input_city" name="city" />
                                <div className={errors.city && touched.city ? "address-form__error address-form__error_city" : "address-form__error address-form__error_city transparent"}>{errors.city}</div>
                                <label className="address-form__label address-form__label_state" htmlFor="state">State</label>
                                <Field className="address-form__input address-form__input_state" name="state" />
                                <div className={errors.state && touched.state ? "address-form__error address-form__error_state" : "address-form__error address-form__error_state transparent"}>{errors.state}</div>
                                <label className="address-form__label address-form__label_zip" htmlFor="zip">Zip</label>
                                <Field className="address-form__input address-form__input_zip" name="zip" />
                                <div className={errors.zip && touched.zip ? "address-form__error address-form__error_zip" : "address-form__error address-form__error_zip transparent"}>{errors.zip}</div>
                                <Link to="/" className="address-form__button">Submit</Link>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </main>
    )
}