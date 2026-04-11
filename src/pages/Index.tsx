import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const rules = [
  { rule: "Length", means: "Reduce to 1/3rd of the original word count", remember: "Count words carefully" },
  { rule: "Tense", means: "Write in 3rd person, past tense", remember: "No 'I', 'we', or present tense" },
  { rule: "Own Words", means: "Rephrase everything completely", remember: "Never copy sentences" },
  { rule: "No Additions", means: "Include only the author's ideas", remember: "No personal opinions" },
  { rule: "Title", means: "Give a short, apt title", remember: "Don't copy the original title" },
  { rule: "Completeness", means: "Cover all main points", remember: "Don't skip key arguments" },
  { rule: "Coherence", means: "Must read as a logical standalone piece", remember: "Smooth transitions" },
  { rule: "Vocabulary", means: "Use formal, precise language", remember: "Avoid slang or colloquial words" },
];

const steps = [
  "Read the passage 2–3 times thoroughly",
  "Identify the central theme",
  "Note key points and arguments",
  "Discard minor details and examples",
  "Draft in your own words",
  "Count words & trim to 1/3rd length",
  "Add an appropriate title",
  "Revise for grammar and coherence",
];

const dos = [
  "Use indirect speech",
  "Maintain the author's tone",
  "Retain key terms and ideas",
  "Write in one paragraph",
  "State facts objectively",
];

const donts = [
  "Use direct quotes",
  "Change the original tone",
  "Exceed the word limit",
  "Add your own opinions",
  "Break into many paragraphs",
];

const mistakes = [
  "Copying verbatim from the original",
  "Writing in 1st person",
  "Adding your own opinions",
  "Missing the central idea",
  "Ignoring the word count limit",
  "Poor or missing title",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-8 md:py-12 max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-3">
          Précis Writing
        </h1>
        <p className="text-center text-muted-foreground italic text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          "A précis is a concise summary in ~1/3rd the original length, retaining the author's ideas and tone."
        </p>

        <Tabs defaultValue="rules" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-secondary mb-6">
            <TabsTrigger value="rules" className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Rules</TabsTrigger>
            <TabsTrigger value="steps" className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Steps</TabsTrigger>
            <TabsTrigger value="dosdonts" className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Do's & Don'ts</TabsTrigger>
            <TabsTrigger value="mistakes" className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Mistakes</TabsTrigger>
          </TabsList>

          <TabsContent value="rules">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-3 font-semibold">Rule</th>
                    <th className="text-left py-3 px-3 font-semibold">What It Means</th>
                    <th className="text-left py-3 px-3 font-semibold">Remember</th>
                  </tr>
                </thead>
                <tbody>
                  {rules.map((r, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 px-3 font-semibold">{r.rule}</td>
                      <td className="py-3 px-3 text-muted-foreground">{r.means}</td>
                      <td className="py-3 px-3 text-muted-foreground italic text-xs">{r.remember}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="steps">
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-4 flex items-start gap-4">
                  <span className="text-lg font-bold text-primary opacity-60 shrink-0">{i + 1}.</span>
                  <span className="text-sm md:text-base">{step}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dosdonts">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-3 font-semibold text-success">✓ Do</th>
                    <th className="text-left py-3 px-3 font-semibold text-danger">✗ Don't</th>
                  </tr>
                </thead>
                <tbody>
                  {dos.map((d, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 px-3 text-success">{d}</td>
                      <td className="py-3 px-3 text-danger">{donts[i]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="mistakes">
            <div className="space-y-3">
              {mistakes.map((m, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-4 pl-5 border-l-4 border-l-danger text-sm md:text-base">
                  {m}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
