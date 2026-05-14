export interface styleVariants {
    gap?: '1' | '2' | '3' | '4' | '5' | '6';
    fontColor: 'primaryColor' | 'secondaryColor';
    fontSize?: 'sm' | 'md' | 'lg' | 'xl';
    fontWeight?: 'bold' | 'bolder' | 'normal';
    background?: 'primary' | 'secondary';
    themeBtnColor?: 'lightMode' | 'darkMode';
}

export interface directionVariants {
    vertical?: 'column';
    horizontal?: 'row';
}

export interface colors {
    bgVariants?: 'lightMode'|'darkMode';
    themeBtnBgVariant?: 'primary'| 'secondary';
    fontColorVariants?: 'primaryText'|'secondaryText';
}

export interface btnProps {
    label?: string;
    title?: string;
    ariaLabel?: string;
    ariaLabelBy?: string;
    ariaDescribed?: string;
    ariaExpanded: boolean;
    ariaDisabled: boolean;
    ariaControls?: string;
    type: 'button' | 'submit' | 'reset';

    gap?: styleVariants['gap'];
    variant?: directionVariants;
}

export interface themeBtnProps {
    background?: styleVariants['themeBtnColor'];
}

export interface navbarProps {
    vertical?: directionVariants['vertical'];
    horizontal?: directionVariants['horizontal'];
}

export interface textProps {
    size?: styleVariants['fontSize'];
    variant?: styleVariants['fontWeight']
}

export interface modalProps {
    id: string;
    ariaLabelledby?: string;
    label?: string;
    preventEsc?: boolean;
}

export interface containerProps {
    ariaLabelledby?: string;
    direction?: 'row' | 'column';
}

export interface inputProps {
    label: string;
    inputId: string;
    ariaLabel: string;
    req: boolean;
    inputPlaceholder?: string;
}

export interface accordionProps {
    date?: Date;
    label?: string;
    iconAnimation?: 'left' | 'down';
}

export interface todoItemProps {
    text: string;
    done: boolean;
}