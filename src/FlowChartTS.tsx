import { createElement, Component, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { diagramReducer } from './reducers/diagramReducer';
import { create } from './store';

import AppButtons from './components/AppButtons';
import SelectionDetails from './components/SelectionDetails';
import MyDiagramContainer from './components/MyDiagramContainer';
import {FlowChartTSContainerProps} from '../typings/FlowChartTSProps';
import './ui/App.css';

const store = create(diagramReducer);

class FlowchartTS extends Component<FlowChartTSContainerProps>{

    render(): ReactNode{
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

export default FlowchartTS;