import profile from "@/assets/photo.jpg";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import "./App.css";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ScrollArea className="h-[100vh] w-[100vw]">
        <div className="flex flex-col min-h-[100vh] relative">
          <Header />
          <div className="flex flex-col p-4 gap-4">
            <img src={profile} className="rounded-full mx-auto w-60" />
            <div className="text-center">
              <h2 className="text-2xl font-bold">Hamed Araab</h2>
              <span>
                Systems Modeling & Data Analytics Student @ Amirkabir University
                of Technology (Tehran Polytechnic)
              </span>
            </div>
            <div className="flex flex-row gap-4 mx-auto">
              <a href="mailto:hamed.araab.02@gmail.com">
                <Button>Email</Button>
              </a>
              <a href="https://linkedin.com/in/hamed-araab" target="_blank">
                <Button>LinkedIn</Button>
              </a>
              <a href="https://github.com/Hawmex" target="_blank">
                <Button>GitHub</Button>
              </a>
              <a href="https://www.kaggle.com/hamedaraab" target="_blank">
                <Button>Kaggle</Button>
              </a>
            </div>
            <div className="flex flex-col p-4 gap-4 max-w-7xl mx-auto">
              <p className="mt-4">Updated on: 02/26/2026</p>
              <h3 className="mt-4 text-xl font-semibold">Short Bio</h3>
              <p>
                Industrial Engineer and researcher specializing in optimization,
                machine learning, and intelligent systems, with a focus on
                data-driven decision-making under uncertainty. Currently
                pursuing my Master's degree in Systems Modeling and Data
                Analytics at Amirkabir University of Technology (Tehran
                Polytechnic), where I maintain a 3.65 GPA and conduct research
                on real-time optimization of transportation networks using
                reinforcement learning. My academic foundation combines rigorous
                coursework in stochastic processes, machine learning, and
                optimization with hands-on research experience, including
                computer vision work on AI-generated image classification and
                teaching assistance in data mining and artificial intelligence
                courses.
              </p>
              <p>
                My research interests center on stochastic optimization, robust
                optimization, and machine learning applications in intelligent
                systems. Beyond academia, I've applied technical expertise as a
                Front-End Engineer at Barsam Smart Market Development,
                contributing to cloud ERP systems and business intelligence
                dashboards for Iran's largest automotive manufacturers.
                Proficient in Python (NumPy, Pandas, TensorFlow, PyTorch,
                scikit-learn), statistical modeling, and business analytics, my
                project portfolio spans CNN-based waste classification,
                discrete-event simulation for hospital optimization, and
                multi-objective production planning. I'm passionate about
                advancing management science through rigorous quantitative
                methods and welcome opportunities to collaborate on research
                addressing complex operational challenges.
              </p>
              <h3 className="mt-4 text-xl font-semibold">Research Interests</h3>
              <ul className="list-disc list-inside">
                <li>Sequential Decision-Making Under Uncertainty</li>
                <li>Stochastic Optimization</li>
                <li>Robust Optimization</li>
                <li>Intelligent Systems</li>
              </ul>
              <h3 className="mt-4 text-xl font-semibold">Honors and Awards</h3>
              <ul className="list-disc list-inside">
                <li>
                  Awarded full government tuition scholarship for Master of
                  Science program. (2024)
                </li>
                <li>
                  Awarded full government tuition scholarship for Bachelor of
                  Science degree. (2020)
                </li>
                <li>
                  Ranked in top 1% among 155,000+ candidates in Iranian
                  University Entrance Exam. (2020)
                </li>
                <li>
                  Direct admission to NODET high school for exceptional academic
                  performance. (2017)
                </li>
                <li>
                  Selected for NODET middle school through competitive exam with
                  less than 1% acceptance rate. (2014)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollArea>
    </ThemeProvider>
  );
}
