import Swal from 'sweetalert2';

interface AlertArg {
    title?: string,
    icon?: any,
    confirmButtonText?: string,
    width?: number,
    padding?: string,
    confirmButtonColor?: string,
}
const SweetAlert = ({ title, icon, confirmButtonText, width, padding, confirmButtonColor, ...props }: AlertArg) => {
    Swal.fire({
        title: title,
        icon: icon,
        confirmButtonText: confirmButtonText,
        width: width,
        padding: padding,
        confirmButtonColor: confirmButtonColor,
        ...props
    })
}
export default SweetAlert
