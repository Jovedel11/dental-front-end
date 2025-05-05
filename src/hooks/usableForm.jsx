import { useForm } from "react-hook-form";

const usableForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    control,
    setValue,
  } = useForm();

  const passwords = watch("password");

  return {
    register,
    handleSubmit,
    errors,
    passwords,
    reset,
    control,
    setValue,
    watch,
  };
};

export default usableForm;
