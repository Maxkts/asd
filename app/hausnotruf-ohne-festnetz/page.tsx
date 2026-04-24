import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";

export const metadata: Metadata = {
  title: "Hausnotruf ohne Festnetz",
  description:
    "Hausnotruf auch ohne klassischen Telefonanschluss: mobile Anbindung und was Sie bei der Entscheidung beachten sollten.",
};

export default function HausnotrufOhneFestnetzPage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Hausnotruf ohne Festnetz"
        lead="Wenn kein klassischer Telefonanschluss vorhanden ist oder Sie ihn nicht nutzen möchten, gibt es Alternativen."
      >
        <p>
          Moderne Hausnotruflösungen können über mobile Funktechnik angebunden
          werden. Das ist besonders relevant, wenn Festnetz in Ihrem Haushalt
          ohnehin keine Rolle mehr spielt.
        </p>
        <p>
          Entscheidend sind Reichweite in der Wohnung, Versorgungsqualität im
          Gebiet und die technische Ausstattung der Basis — wir gehen diese
          Punkte in der Beratung strukturiert mit Ihnen durch.
        </p>
        <p>
          So finden wir eine Lösung, die im Alltag zuverlässig funktioniert und
          zu Ihren Gewohnheiten passt.
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
