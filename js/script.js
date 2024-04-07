const { createApp } = Vue;

createApp({
    data() {
        return {
          contacts: [{
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [{
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
            }],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [{
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }],
        }],

          ioFoto: './img/avatar_io.jpg',
          ioNome: 'Sofia',
          contattoSelezionato: 0,
          risultatoRicerca: '',
          isVisible: false,
          stato:'',
          newMessage:'',
          
        };
    },
    methods: {

      filterContacts(){
        this.contacts.forEach((contact) => {
           let nome = contact.name.toLowerCase();
            contact.visible = nome.includes(this.risultatoRicerca.toLowerCase());
        });
      },

      selezionaContatto(index) {
        this.contattoSelezionato = index;
      },

      ultimoMessaggio(contact) {
        const lastMessage = contact.messages[contact.messages.length - 1];
        let lastSendMessage = '';
        let lastSendDate = ''; 
        if (lastMessage) {
            lastSendMessage = lastMessage.message;
            lastSendDate = lastMessage.date; 
            const timeParts = lastSendDate.split(' ')[1].split(':');
            lastSendDate = `${timeParts[0]}:${timeParts[1]}`;
        } else {
            return 'Nessun messaggio';
        }
        return { message: lastSendMessage, date: lastSendDate }; 
      },
      
      mostraOra(dateString) {
        let parte = dateString.split(' ')[1].split(':');
        return `${parte[0]}:${parte[1]}`;
      },

      inviaMessaggio() {
        if (this.newMessage.trim() !== '') {
            this.contacts[this.contattoSelezionato].messages.push({
                date: new Date().toLocaleString(),
                message: this.newMessage,
                status: 'sent'
            });
            this.newMessage = '';
        }
      },
  },
}).mount('#app');



