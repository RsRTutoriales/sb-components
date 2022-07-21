import './mylabel.css';

export interface MyLabelProps {
    /**
     * Texto del label
     */
    label: string;
    /**
     * Tamaño del label.
     */    
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * Mayusculas
     */  
    allCaps: boolean;
    /**
     * Color del label
     */  
    color: 'primary'|'secondary'|'tertiary'
    /**
    * What font color to use
    */
    fontColor?: string;
}

export const MyLabel = ({
    label='No label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{ 'color': fontColor }}>
            { allCaps ? label.toUpperCase() : label}
        </span>
    )
}