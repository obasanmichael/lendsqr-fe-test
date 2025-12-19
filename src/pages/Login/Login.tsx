import { useState } from "react";
import logo from "../../assets/logo.svg";
import signinIllustration from "../../assets/sign-in.png";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useUserStore from "../../store/userStore";

const loginSchema = z.object({
  email: z.email({ message: "Invalid Email Adress" }),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const setUser = useUserStore((state) => state.setUser);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const { email, password } = data;
      if (email === "obasantolu@gmail.com" && password === "password123") {
        const user = { name: "Obasan", email: email };
        setUser(user);
        toast.success("Welcome back, Obasan 👋", {
          icon: "🚀",
        });
        navigate("/dashboard");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.imageSection}>
        <img className={styles.logo} src={logo} alt="Lendsqr logo" />
        <img
          className={styles.illustration}
          src={signinIllustration}
          alt="Signin Illustration"
        />
      </div>
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <img className={styles.mobileLogo} src={logo} alt="Lendsqr logo" />
          <h1 className={styles.welcomeText}>Welcome!</h1>
          <p className={styles.enterDetails}>Enter details to login</p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className={styles.errorText}>{errors.email.message}</p>
            )}

            <div className={styles.inputGroup}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={styles.input}
                {...register("password")}
              />
              <button
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className={styles.showToggle}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            {errors.password && (
              <p className={styles.errorText}>{errors.password.message}</p>
            )}
            <a href="#" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </a>
            <button className={styles.loginButton} type="submit">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
