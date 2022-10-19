import React from "react";
import "./form.css";
export default function Form() {

    const [formData, setformData] = React.useState(
        { fullname: "", email: "", password: "", comments: "", isChecked: true, employment: "", favlang: "" });
    function changeHandler(event) {
        const { name, value, type, checked } = event.target
        setformData(prevData => {
            return {
                ...prevData,
                // [event.target.name]:event.target.value
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
    function onSubmitHandler(event) {
        event.preventDefault()
        console.log(formData);
        // console.log(event);
    }
    return (

        <div className="form-container">
            <fieldset>
                <legend>
                    React Form
                </legend>

                <form onSubmit={onSubmitHandler}>
                    <input type="text"
                        placeholder="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={changeHandler} />
                    <input type="email"
                        placeholder="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler} />
                    <input type="password"
                        placeholder="password"
                        name="password"
                        value={formData.password}
                        onChange={changeHandler} />
                    <textarea value={formData.comments} placeholder="Write Your Comments here" name="comments" onChange={changeHandler}/>
                    <input id="terms&coditions" type="checkbox" checked={formData.isChecked} name="isChecked" onChange={changeHandler} />
                    <label htmlFor="terms&conditions">Agree to Terms & conditions.</label>

                    <fieldset>
                        <legend>
                            Your Current Employment Status?
                        </legend>
                        <input id="unemployed"
                            type="radio"
                            name="employment"
                            value="unemployed"
                            checked={formData.employment === "unemployed"}
                            onChange={changeHandler}
                        />
                        <label htmlFor="unemployed">Unemployed</label>

                        <input id="employed"
                            type="radio"
                            name="employment"
                            value="employed"
                            checked={formData.employment === "employed"}
                            onChange={changeHandler}
                        />
                        <label htmlFor="employed">Employed</label>
                    </fieldset>
                    <br />
                    <br />
                    <label htmlFor="favlang">Which is your favourite programming language?</label>
                    <select id="favlang" value={formData.favlang} onChange={changeHandler} name="favlang">
                        <option value="">--Choose--</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="C++">C++</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="Solidity">Solidity</option>
                        <option value="Rust">Rust</option>
                    </select>
                    <button>Submit</button>
                </form>
            </fieldset>
        </div>
    )
}