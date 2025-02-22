export class Solicitation {

  /**
   * Constructor.
   */
  constructor (
        public solNum: String,
        public title: String,
        public url: String,
        public predictions: {value: String, history: [{value: String, date: String}]},
        public reviewRec: String,
        public numDocs: String,
        public category_list: {value: String},
        public date: Date,
        public agency: String,
        public office: String,
        public contact: String,
        public position: String,
        // public reviewStatus: Boolean,
        public noticeType: String,
        public parseStatus: [{
          formattedDate: string;
          postedDate: Date;
          name: String,
          status: String,
          attachment_url: String}],
        // public contactInfo: {
        //   contact: String,
        //   name: String,
        //   position: String,
        //   email: String
        // },
        public contactInfo: [String],
        public history: [{
          date: String,
          action: String,
          user: String,
          status: String
        }],
        public feedback: [{
          questionID: String,
          question: String,
          note: String,
          answer: String,
        }],
        public noticeData: {
          psc: String,
          naics: String,
          naics_match: Boolean,
          epa_psc_match: Boolean
        },
        public newFeedbackSubmission: Boolean,
        public undetermined: Boolean,
        public na_flag: Boolean,

        public id: String,
        public active: Boolean
) {}
}
