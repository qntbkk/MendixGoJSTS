import { Component, ReactNode, createElement } from "react";
import AppButtons from './components/AppButtons';
import MyDiagramContainer from './components/MyDiagramContainer';
import SelectionDetails from './components/SelectionDetails';
import {FlowChartTSPreviewProps} from '../typings/FlowChartTSProps';
import { Provider } from 'react-redux';
import { diagramReducer } from './reducers/diagramReducer';
import { create } from './store';

import go from 'gojs';

const gojsKey = process.env.REACT_APP_GOJS_KEY;

if (gojsKey) {
    // tslint:disable-next-line:no-any
    (go as any).licenseKey = gojsKey;
}

declare function require(name: string): string;
const store = create(diagramReducer);

export class preview extends Component<FlowChartTSPreviewProps> {
    render(): ReactNode {
        return createElement(Provider, { store },
            createElement(
                AppButtons
            ),
            createElement(
            SelectionDetails
            ),
            createElement(
            MyDiagramContainer
            )
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/App.css");
}