import PropTypes from 'prop-types';
// yarn add prop-types

const sayHi = (name) => {
    return `Hola ${name}, buen dia!`;
}

const newMsg = {
    a: 'hola',
    b: 'Pablo',
}

export const FirstApp = ({title, subTitle, name}) => {

    return (
        <>
            {/* <h1> {sayHi('Pablo')} </h1> */}
            {/* <h1>{JSON.stringify(newMsg)}</h1> */}
            <h1>{title}</h1>
            <p> {subTitle} </p>
            <p> {name} </p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Pablo Gonzalez',
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo', //va a dar error porque el tipo es del tipo number
}

