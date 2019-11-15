import React from "react";
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(["primary", "default", "danger"]),
        disabled: PropTypes.oneOf([true, false]),
        size: PropTypes.oneOf(["md", "lg", "sm"])
    };

    static defaultProps = {
        type: "default",
        disabled: false,
        size: "md"
    };

    render() {
        const { type, disabled, size, children, onClick } = this.props;
        let _classType = `azhu-btn-${type}`
        let _classSize = `azhu-btn-${size}`

        let _class = `azhu-btn ${_classType} ${_classSize}`;

        console.log('ss')

        return (
            <button onClick={onClick} disabled={disabled} className={_class}>
                {children}
            </button>
        );
    }
}
