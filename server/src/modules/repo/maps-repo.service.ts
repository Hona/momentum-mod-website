import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Map, Prisma } from '@prisma/client';

@Injectable()
export class MapsRepoService {
    constructor(private prisma: PrismaService) {}

        });
    }

    async update(mapId: number, data: Prisma.MapUpdateInput): Promise<Map> {
        return await this.prisma.map.update({
            where: { id: mapId },
            data: data
        });
    }

    async getAll(
        where: Prisma.MapWhereInput,
        include?: Prisma.MapInclude,
        order?: Prisma.MapOrderByWithRelationInput,
        skip?: number,
        take?: number
    ): Promise<[Map[], number]> {
        const count = await this.prisma.map.count({
            where: where
        });

        const maps = await this.prisma.map.findMany({
            where: where,
            skip: skip,
            take: take,
            include: include
        });

        return [maps, count];
    }

    async get(id: number, include?: Prisma.MapInclude): Promise<Map> {
        return await this.prisma.map.findFirst({
            where: {
                id: id
            },
            include: include
        });
    }

    async updateCredit(where: Prisma.MapCreditWhereInput, input: Prisma.MapCreditUpdateInput) {
        this.prisma.mapCredit.updateMany({ where: where, data: input });
    }
}
