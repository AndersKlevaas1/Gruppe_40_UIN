// schemas/logEntry.js
export default {
    name: 'logEntry',
    title: 'Loggføring',
    type: 'document',
    fields: [
      {
        name: 'member',
        title: 'Medlem',
        type: 'reference',
        to: [{ type: 'member' }] // Refererer til medlemmet i "member"-skjemaet
      },
      {
        name: 'task',
        title: 'Oppgave',
        type: 'string'
      },
      {
        name: 'date',
        title: 'Dato',
        type: 'datetime'
      },
      {
        name: 'description',
        title: 'Beskrivelse',
        type: 'text'
      }
    ]
  };
  