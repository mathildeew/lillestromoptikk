import LogMAR from "../LogMAR";

export default function HomeLogMar() {
  return (
    <div className="text-white bg-kleinBlue h-full flex flex-col items-center justify-center gap-10">
      <LogMAR />
      <div className="max-w-3xl flex flex-col gap-8">
        <p>
          Merker du at høyre øye vil lese krimroman mens venstre foretrekker
          romantikk? Eller kanskje begge øynene har blitt litt uenige om
          skjermopplevelsen? Da høres det ut som det er på tide med en
          synsundersøkelse.
        </p>
        <p>
          Å prioritere regelmessige synsundersøkelser er å investere i fremtiden
          til øynene dine, uavhengig av alder eller daglige aktiviteter.
        </p>
      </div>
    </div>
  );
}
