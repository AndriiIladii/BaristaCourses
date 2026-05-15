import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendLeadToTelegram } from "@/actions/telegram";
import { formSchema, type FormValues } from "@/lib/validations/schema";
import { useSearchParams } from "next/navigation";

function useLeadForm() {
  const searchParams = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      courseId: "",
      contactMethod: "telegram",
      contactValue: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const result = await sendLeadToTelegram(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        alert("Сталася помилка при відправці. Спробуйте пізніше.");
      }
    } catch (error) {
      alert("Сталася помилка при відправці. Спробуйте пізніше.");
    }
  };

  const contactMethod = watch("contactMethod");
  const contactValue = watch("contactValue");

  useEffect(() => {
    const course = searchParams.get("course");
    if (course) {
      setValue("courseId", course as FormValues["courseId"]);
    }
  }, [searchParams, setValue]);

  useEffect(() => {
    if (contactMethod === "telegram" || contactMethod === "instagram") {
      if (!contactValue || contactValue.startsWith("+380")) {
        setValue("contactValue", "@");
      }
    } else if (contactMethod === "phone") {
      if (!contactValue || contactValue === "@") {
        setValue("contactValue", "+380");
      }
    }
  }, [contactMethod, setValue]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    contactMethod,
  };
}

export default useLeadForm;
