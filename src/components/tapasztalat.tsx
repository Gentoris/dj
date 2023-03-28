import { Component, ReactNode } from "react";
import { Tapasztalat as TapasztalatInterface } from "../tapasztalat";

interface Props {
    tapasztalat: TapasztalatInterface
}

export default class Tapasztalat extends Component<Props> {
    render(): ReactNode {
        return <><h1>Szakmai Tapasztalat</h1>
        <img src="petrik.jpg" alt="petrik"></img><tr>
            <td>{this.props.tapasztalat.pbono}</td>
            <td>{this.props.tapasztalat.pro}</td>
        </tr></>
    }
}
