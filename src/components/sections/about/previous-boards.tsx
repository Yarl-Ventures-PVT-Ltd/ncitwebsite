import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Past board terms, carried over from the previous ncit.lk site, which listed
 * them under a "Previous Boards" menu. They are part of the chamber's record
 * and were the only place several long-serving directors were named.
 */
const previousBoards = [
  {
    term: "2021 / 2022",
    officers: [
      { role: "Chairman", name: "Robinson Prashanthan", company: "CEO, Innovay" },
      { role: "Vice Chairman", name: "Venugopan K", company: "Director, College of ICT" },
      { role: "Financial Director", name: "Mr. Nadarajah Shanmugarajah", company: "Raj Creation" },
    ],
    directors: [
      { name: "Robinson Prashanthan", company: "CEO, Innovay" },
      { name: "Mr. Thangarajah Thavaruban", company: "CEO, Speed IT net" },
      { name: "Mr. Sivapathasuntharam Sivaskaran", company: "Director, MCS IT Campus" },
      { name: "Mr. Kanesh Venugoban", company: "Director, College of ICT" },
      { name: "Mr. Sharmmhik Yogarajah", company: "CEO, BNS" },
      { name: "Ms. Jaruza Jayachandran", company: "CEO, eZ Booking" },
      { name: "Mr. Subramaniam Theivamainthan", company: "CEO, Iconic Coder" },
      { name: "Mr. Nadarajah Shanmugarajah", company: "Raj Creation" },
    ],
    advisors: [
      { role: "Auditors", name: "JA Partners" },
      { role: "Bankers", name: "NDB Jaffna" },
    ],
  },
  {
    term: "2017 / 2018",
    officers: [
      { role: "Chairman", name: "Thavaruban T", company: "Speed IT net" },
      { role: "Vice Chairman", name: "Sharmmhik Y", company: "BNS" },
      { role: "Financial Director", name: "Venugopan K", company: "College of ICT" },
    ],
    directors: [
      { name: "Thangarajah Thavaruban", company: "Speed IT net" },
      { name: "Robinson B. Prashanthan", company: "Innovay" },
      { name: "Sivalingam Sathasivam", company: "ASTP Tec" },
      { name: "Murugiah Sanjeev", company: "Nalin IT" },
      { name: "Sivapathasuntharam Sivaskaran", company: "MCS IT Campus" },
      { name: "Kanesh Venugoban", company: "College of ICT" },
      { name: "Sharmmhik Yogarajah", company: "BNS" },
      { name: "Kamal Raj", company: "IT Platform" },
    ],
    advisors: [{ role: "Company Secretary", name: "Abaya Law firm (Pvt) Ltd" }],
  },
];

export default function PreviousBoards() {
  return (
    <section id="previous-boards" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ncit-ink mb-4">
            Previous Boards
          </h2>
          <p className="text-ncit-ink/70 text-lg leading-relaxed">
            The directors who have served the Northern Chamber of Information Technology
            in earlier terms.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {previousBoards.map((board) => (
            <Card key={board.term} className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-4 font-heading">
                  <span>Board of Directors</span>
                  <Badge variant="secondary">{board.term}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ncit-blue mb-3">
                    Office Bearers
                  </h3>
                  <ul className="space-y-2">
                    {board.officers.map((o) => (
                      <li key={o.role} className="text-sm">
                        <span className="font-semibold text-ncit-ink">{o.role}:</span>{" "}
                        <span className="text-ncit-ink/80">{o.name}</span>
                        <span className="text-ncit-ink/50"> - {o.company}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ncit-blue mb-3">
                    Directors
                  </h3>
                  <ol className="space-y-1.5 list-decimal list-inside">
                    {board.directors.map((d, i) => (
                      <li key={`${d.name}-${i}`} className="text-sm text-ncit-ink/80">
                        {d.name}
                        <span className="text-ncit-ink/50"> - {d.company}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  {board.advisors.map((a) => (
                    <div key={a.role} className="text-sm">
                      <span className="font-semibold text-ncit-ink">{a.role}:</span>{" "}
                      <span className="text-ncit-ink/80">{a.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
