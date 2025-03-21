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
              <p className="mt-4">Updated on: 1/12/2025</p>
              <h3 className="mt-4 text-xl font-semibold">Short Bio</h3>
              <p>
                I am pursuing my graduate studies in Systems Modeling & Data
                Analytics at Amirkabir University of Technology (Tehran
                Polytechnic), where my academic focus converges on machine
                learning, applied statistics, and optimization methodologies. My
                commitment to advancing my expertise in these domains has led me
                to complete several specialized courses in machine learning,
                deep learning, and large language models through Stanford
                University and DeepLearning.AI's comprehensive programs on
                Coursera. Concurrently, I have been actively engaged in various
                university research initiatives, applying theoretical knowledge
                to practical implementations.
              </p>
              <p>
                My technical journey began with web development, mastering HTML,
                CSS, and JavaScript during my formative years, which later
                evolved into proficiency in TypeScript and Dart for
                cross-platform development. This foundation in programming,
                coupled with my current focus on machine learning, has enabled
                me to develop extensive expertise in Python and its ecosystem,
                which I leverage extensively in my academic research and project
                implementations.
              </p>
              <h3 className="mt-4 text-xl font-semibold">Research Interests</h3>
              <ul className="list-disc list-inside">
                <li>Applied Machine Learning</li>
                <li>Decision Making under Uncertainty</li>
                <li>Stochastic Optimization</li>
                <li>Information Systems</li>
              </ul>
              <h3 className="mt-4 text-xl font-semibold">Honors & Awards</h3>
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
