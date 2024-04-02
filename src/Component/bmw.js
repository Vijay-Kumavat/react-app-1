import React from "react";
import Car from "./car";

class BMW extends React.Component {
    render() {
        const carName = 'BMW';
        const name = 'Rahul';
        const isShow = 'true';
        if (isShow) {
            return (
                <>
                    <Car carName={carName} />
                    <h4>Goodbye may seem forever.</h4>
                    <h4>Hello {name}, Good morning! Goodbye may seem forever</h4>
                </>
            );
        }
        else {
            return (
                <>
                    <h4>Goodbye may seem forever.</h4>
                </>
            );
        }
    }
}

export default BMW;