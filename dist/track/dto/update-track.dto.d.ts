import { TrackStatus } from '../entities/track.entity';
import { CreateTrackDto } from './create-track.dto';
declare const UpdateTrackDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTrackDto>>;
export declare class UpdateTrackDto extends UpdateTrackDto_base {
    login: string;
    name: string;
    email: string;
    repository: number;
    status: TrackStatus;
    public_repos: number;
    public_gists: number;
    password?: string;
}
export {};
