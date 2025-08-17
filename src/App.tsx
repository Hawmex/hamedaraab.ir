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
                of Technology (Tehran Polytechnic) | AI Engineer | Data
                Scientist | Front-End Engineer
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
              <p className="mt-4">Updated on: 8/17/2025</p>
              <h3 className="mt-4 text-xl font-semibold">Short Bio</h3>
              <p>
                Industrial Engineering Master's student at Amirkabir University
                of Technology (Tehran Polytechnic) specializing in Systems
                Modeling and Data Analytics, with a passion for leveraging
                machine learning, reinforcement learning, and optimization to
                solve complex problems in intelligent systems and
                decision-making under uncertainty. Holding a B.Sc. in Industrial
                Engineering with a 3.74 GPA, I've conducted research on
                AI-generated image classification and am currently exploring
                real-time road network optimization via RL for my thesis. As a
                Front-End Engineer at Barsam Smart Market Development, I
                contribute to cloud ERP and e-commerce platforms handling
                high-volume transactions, while my internship at the Ministry of
                Agriculture involved digitizing legacy records and building data
                pipelines. Experienced in Python (NumPy, Pandas, TensorFlow,
                PyTorch), Dart, SQL, and tools like Power BI, I've developed
                projects including a CNN for waste classification, rule-based
                movie recommenders, and simulation-based hospital staffing
                optimization. Certified in Deep Learning and Machine Learning
                from Coursera, I'm eager to connect on innovative applications
                of AI and data-driven strategies in industry.
              </p>
              <h3 className="mt-4 text-xl font-semibold">Research Interests</h3>
              <ul className="list-disc list-inside">
                <li>Stochastic and Robust Optimization</li>
                <li>Machine Learning and Reinforcement Learning</li>
                <li>Decision Making under Uncertainty</li>
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
