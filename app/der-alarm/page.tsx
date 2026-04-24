import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";

export const metadata: Metadata = {
  title: "Der Alarm",
  description:
    "So lösen Sie den Hausnotruf-Alarm aus: Funksender, Basisgerät, Notstrom und automatische Weiterleitung an die Zentrale.",
};

export default function DerAlarmPage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Der Alarm"
        lead="Mit dem Funksender lösen Sie überall in der Wohnung Hilfe aus — schnell und verständlich."
      >
        <p>
          Mit dem Funksender, den Sie bequem als Armband oder mit einer Kette um
          den Hals tragen, können Sie überall in Ihrer Wohnung den Alarm
          auslösen. Sie drücken einfach den Notrufknopf und schon wird das
          Alarmsignal per Funk an Ihr Hausnotrufgerät weitergeleitet. Über das
          Telefonnetz wird Ihr Alarm an die Hausnotrufzentrale durchgestellt.
        </p>
        <p>
          Damit Sie auch bei Stromausfall Alarm auslösen können, verfügt das
          Hausnotrufgerät selbstverständlich über eine Notstromversorgung. Eine
          automatische Funktionsüberwachung für Batterie und Handsender
          gewährleistet eine stetige und zuverlässige Einsatzbereitschaft von
          diesem Hausnotrufsystem.
        </p>
        <p>
          Sollte die Telefonleitung durch ein Gespräch belegt sein, so trennt das
          ASD Hausnotrufgerät diese Verbindung und leitet Ihren Notruf
          automatisch an die Hausnotrufzentrale weiter.
        </p>
        <p>
          <strong>ASD Hausnotruf: Sinnvoll! 100%ige Sicherheit rund um die Uhr.</strong>
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
