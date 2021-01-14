export interface Serializer<Model, DTO> {
    serialize(model: Model): DTO;
    deserialize(dto: DTO): Model;
}
