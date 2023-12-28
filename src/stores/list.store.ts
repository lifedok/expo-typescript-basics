// import { action, computed, makeObservable, observable } from "mobx";
// import { injectable } from 'inversify';
//
// @injectable()
export class ListStore {

  async loadList(): Promise<void> {
    try{

    }catch(err) {
      throw err;
    } finally {
      // await getPokemonList()
    }
  }
}
//   static _name = 'poolsStore';
//
//   static readonly defaultCount = 25;
//
//   @observable
//   public listItem: {};
//
//   @observable
//   public isLoadingList: boolean = true;
//
//   public cancellablePromise: {
//     fetchAllIdealSizePools: CancellablePromise<any>,
//   } = {
//     fetchAllIdealSizePools: null,
//   }
//
//   constructor() {
//     makeObservable(this)
//   }
//
//   @action
//   public setIdealSizePools(pools: Pool[]) {
//     this.idealSizePools = pools;
//   }
//
//   @action
//   setShuffledPools(key: PoolFilterKeys, pools: Pool[]) {
//     this.poolCardsData[key] = pools;
//   }
//
//   @action setIsLoading(value: boolean) {
//     this.isLoading = value;
//   }
//
//   @action setIsLoadingIdealPools(value: boolean) {
//     this.isLoadingIdealPools = value;
//   }
//
//   @action setIsLoadingEntities(value: boolean) {
//     this.isLoadingEntities = value;
//   }
//
//   @action
//   setIsShuffledPoolsLoading(key: PoolFilterKeys, value: boolean) {
//     this.isShuffledPoolsLoading[key] = value;
//   }
//
//   @action
//   setSinglePoolEntityDistribution(data: Pool[]): void {
//     this.singlePoolEntityDistribution = data;
//   }
//
//   @action
//   setSinglePoolEntityDistributionTotalStake(data: Pool[]): void {
//     this.singlePoolEntityDistributionTotalStake = data?.reduce((acc, pool) => acc + Number(pool.stakeActive), 0) ?? 0;
//   }
//
//   @action
//   setHasSearchFormError(value: boolean) {
//     this.hasSearchFormError = value;
//   }
//
//   async loadListItem(): Promise<void> {
//     try {
//       const listItem = await this.poolsQuery.getPools();
//       this.setListItem(listItem);
//     } catch (err) {
//       this.setHasSearchFormError(true);
//       this.setListItem({});
//     } finally {
//       this.setIsLoading(false);
//     }
//   }
//
//   // async loadPokemon(count: number): Promise<void> {
//   //   try {
//   //     this.setIsPokemonLoading(true);
//   //     const promiseKey = `fetchShuffled${capitalizeFirstLetter(poolFilterKey)}Pools`;
//   //
//   //     const pools = await this.cancellablePromise[promiseKey];
//   //     const specificLengthShuffledPools = chooseRandomObjects<Pool>(pools, poolsQuantity || 10);
//   //     this.setPokemonList();
//   //   } catch(err) {
//   //     throw err;
//   //   } finally {
//   //     this.setIsPokemonLoading(false);
//   //   }
//   // }
//
// }
//
