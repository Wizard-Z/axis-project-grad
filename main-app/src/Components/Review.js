import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
    const [state, setState] = useState({ name: '', contactNo: '', email: '' });

    useEffect(() => {
        const { steps } = props;
        const { name, contactNo,email } = steps;
        setState({ name, contactNo,email });
    }, [props])

    const { name, contactNo, email } = state;
    return (
        <div style={{ width: '100%' }}>
            <h3>Summary</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{name.value}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email.value}</td>
                    </tr>
                    <tr>
                        <td>ContactNo</td>
                        <td>{contactNo.value}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

export default Review;
