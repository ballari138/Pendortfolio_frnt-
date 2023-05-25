import React, { useState } from 'react';
import Service from '../Service/Service';
import './Form.css'; // Import the CSS file for styling

const Form = () => {
    const [formData, setFormData] = useState({
        themeName: '',
        investmentHorizon:'',
        risk: '',
        equities: '',
        bonds: '',
        commodities: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        Service.createTheme(formData)
        .then((response => console.log(response.data)))
        .catch((error)=>{console.log(error)})
        //console.log(formData);
    };

    return (


        <div>
            <form className="f">

                <>
                    <div className="form-row">
                        <label htmlFor="themeName">Theme Name</label>
                        <input
                            type="tel"
                            id="themeName"
                            name="themeName"
                            value={formData.themeName}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="form-row">
                        <label htmlFor="investmentHorizon">Investment Horizon</label>
                        <input
                            type="tel"
                            id="investmentHorizon"
                            name="investmentHorizon"
                            value={formData.investmentHorizon}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="risk">risk</label>
                        <input
                            type="text"
                            id="risk"
                            name="risk"
                            value={formData.risk}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="commodities">Commodities:</label>
                        <input
                            id="commodities"
                            name="commodities"
                            value={formData.commodities}
                            placeholder="Enter percenatge"
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="equities">equities:</label>
                        <input
                            id="equities"
                            name="equities"
                            value={formData.equities}
                            placeholder="Enter percenatge"
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="bonds">bonds</label>
                        <input
                            type="text"
                            id="bonds"
                            name="bonds"
                            value={formData.bonds}
                            placeholder="Enter percenatge"
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="form-row">
                        <button type="submit" onClick={handleSubmit}>Save</button>
                    </div>
                </>
            </form>

        </div>
    );
};

export default Form;