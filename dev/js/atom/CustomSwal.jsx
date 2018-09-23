import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const CustomSwal = withReactContent(Swal);

CustomSwal.fire({
  type: 'success',
  title: 'Your data has been saved',
  showConfirmButton: false,
  timer: 1500
})
