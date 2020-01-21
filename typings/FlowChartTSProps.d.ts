/**
 * This file was generated from FlowChartTS.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export interface FlowChartTSContainerProps extends CommonProps {
    sampleText?: string;
}

export interface FlowChartTSPreviewProps {
    class: string;
    style: string;
    styleObject: CSSProperties;
    sampleText?: string;
}

export interface VisibilityMap {
    sampleText: boolean;
}
