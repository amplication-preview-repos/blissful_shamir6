/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Rate } from "./Rate";
import { RateCountArgs } from "./RateCountArgs";
import { RateFindManyArgs } from "./RateFindManyArgs";
import { RateFindUniqueArgs } from "./RateFindUniqueArgs";
import { CreateRateArgs } from "./CreateRateArgs";
import { UpdateRateArgs } from "./UpdateRateArgs";
import { DeleteRateArgs } from "./DeleteRateArgs";
import { Profile } from "../../profile/base/Profile";
import { RateService } from "../rate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Rate)
export class RateResolverBase {
  constructor(
    protected readonly service: RateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Rate",
    action: "read",
    possession: "any",
  })
  async _ratesMeta(
    @graphql.Args() args: RateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Rate])
  @nestAccessControl.UseRoles({
    resource: "Rate",
    action: "read",
    possession: "any",
  })
  async rates(@graphql.Args() args: RateFindManyArgs): Promise<Rate[]> {
    return this.service.rates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Rate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Rate",
    action: "read",
    possession: "own",
  })
  async rate(@graphql.Args() args: RateFindUniqueArgs): Promise<Rate | null> {
    const result = await this.service.rate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Rate)
  @nestAccessControl.UseRoles({
    resource: "Rate",
    action: "create",
    possession: "any",
  })
  async createRate(@graphql.Args() args: CreateRateArgs): Promise<Rate> {
    return await this.service.createRate({
      ...args,
      data: {
        ...args.data,

        profile: args.data.profile
          ? {
              connect: args.data.profile,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Rate)
  @nestAccessControl.UseRoles({
    resource: "Rate",
    action: "update",
    possession: "any",
  })
  async updateRate(@graphql.Args() args: UpdateRateArgs): Promise<Rate | null> {
    try {
      return await this.service.updateRate({
        ...args,
        data: {
          ...args.data,

          profile: args.data.profile
            ? {
                connect: args.data.profile,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Rate)
  @nestAccessControl.UseRoles({
    resource: "Rate",
    action: "delete",
    possession: "any",
  })
  async deleteRate(@graphql.Args() args: DeleteRateArgs): Promise<Rate | null> {
    try {
      return await this.service.deleteRate(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Profile, {
    nullable: true,
    name: "profile",
  })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "any",
  })
  async getProfile(@graphql.Parent() parent: Rate): Promise<Profile | null> {
    const result = await this.service.getProfile(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}