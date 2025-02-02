import React from "react";
import cloneDeep from 'lodash/cloneDeep'
import Plot from 'react-plotly.js'

export default function _plot(props) {
    let {context, children, ...kw} = props
    return <Plot {...Object.assign(cloneDeep(context.props.formData), kw)}/>

}
