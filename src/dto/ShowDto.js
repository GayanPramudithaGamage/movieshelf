export class ShowDto {
    constructor(data) {
      this.id = data.id
      this.name = data.name
      this.image = data.image?.medium || null
      this.rating = data.rating?.average || 'N/A'
      this.summary = data.summary || ''
    }
  }
  