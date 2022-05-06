import React, { DetailedHTMLProps, FC, ReactNode, FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './ButtonCustom.module.scss';

export interface ButtonProps
    extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
    title?: string;
    variant?: 'primary' | 'danger' | 'success' | 'disable';
    textColor?: string;
    mode?: 'contained' | 'outlined';
    Icon?: FunctionComponent<React.SVGAttributes<SVGElement>>;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    color?: string;
    bgColor?: string;
    styleCustom?: string;
    txtStyle?: string;
    radius?: boolean;
}
const getOutLinedColor = (variant: any) => {
    switch (variant) {
        case 'primary':
            return '#4f0048';
        case 'danger':
            return '#c00f39';
        case 'success':
            return '#08855f';
        case 'disable':
            return '#818181';
        default:
            break;
    }
};
const ButtonCustom: FC<ButtonProps> = ({
    radius = true,
    children,
    title,
    mode,
    Icon,
    size,
    disabled,
    bgColor,
    color,
    variant = 'primary',
    txtStyle = '',
    styleCustom = '',
    ...props
}) => {
    const outlinedColor = getOutLinedColor(variant);
    return (
        <button
            className={classNames(
                { [styles.btnConatiner]: true },
                { [styles.radiusStyle]: radius },
                { [styles.outlinedModeStyle]: mode === 'outlined' },
                { [styles.primary]: variant === 'primary' },
                { [styles.danger]: variant === 'danger' },
                { [styles.success]: variant === 'success' },
                { [styles.disable]: variant === 'disable' },
                { [styles.outlineDangerMode]: mode === 'outlined' && variant === 'danger' },
                { [styles.outlineSuccessMode]: mode === 'outlined' && variant === 'success' },
                { [styles.outlineDisabledMode]: mode === 'outlined' && variant === 'disable' },
                { [styles.outlineContainedMode]: mode === 'outlined' && variant === 'primary' },
                { [styleCustom]: true },
                { [styles.smallSize]: size === 'small' },
                { [styles.mediumSize]: size === 'medium' },
                { [styles.largeSize]: size === 'large' },
            )}
            disabled={disabled}
            {...props}
        >
            {children}
            <div className={styles.container}>
                {Icon ? (
                    <Icon
                        fill={mode === 'outlined' ? outlinedColor : '#fff'}
                        className={classNames('w-6 h-6', { [styles.iconStyle]: true })}
                    />
                ) : null}
                <p
                    color="#7c0062"
                    className={classNames(
                        { [styles.titleStyle]: true },
                        { [styles.titleStyleSmall]: size === 'small' },
                        { [styles.titleStyleMedium]: size === 'medium' },
                        { [styles.outlineDangerText]: mode === 'outlined' && variant === 'danger' },
                        { [styles.outlineText]: mode === 'outlined' },
                        {
                            [styles.outlineSuccessText]:
                                mode === 'outlined' && variant === 'success',
                        },
                        {
                            [styles.outlineDisabledText]:
                                mode === 'outlined' && variant === 'disable',
                        },
                        {
                            [styles.outlineContainedText]:
                                mode === 'outlined' && variant === 'primary',
                        },
                        { [styles.containedText]: mode === 'contained' && variant === 'disable' },
                        { [txtStyle]: true },
                    )}
                >
                    {title}
                </p>
            </div>
        </button>
    );
};

export default ButtonCustom;
