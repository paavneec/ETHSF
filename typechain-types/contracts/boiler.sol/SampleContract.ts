/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface SampleContractInterface extends utils.Interface {
  functions: {
    "callMidpoint(string,string)": FunctionFragment;
    "callback(uint256,uint64)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "callMidpoint" | "callback"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "callMidpoint",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "callback",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "callMidpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "callback", data: BytesLike): Result;

  events: {
    "RequestMade(uint256,string,string)": EventFragment;
    "ResponseReceived(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RequestMade"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ResponseReceived"): EventFragment;
}

export interface RequestMadeEventObject {
  requestId: BigNumber;
  SERVER_ID: string;
  USER_ID: string;
}
export type RequestMadeEvent = TypedEvent<
  [BigNumber, string, string],
  RequestMadeEventObject
>;

export type RequestMadeEventFilter = TypedEventFilter<RequestMadeEvent>;

export interface ResponseReceivedEventObject {
  requestId: BigNumber;
}
export type ResponseReceivedEvent = TypedEvent<
  [BigNumber],
  ResponseReceivedEventObject
>;

export type ResponseReceivedEventFilter =
  TypedEventFilter<ResponseReceivedEvent>;

export interface SampleContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SampleContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    callMidpoint(
      SERVER_ID: PromiseOrValue<string>,
      USER_ID: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    callback(
      _requestId: PromiseOrValue<BigNumberish>,
      _midpointId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  callMidpoint(
    SERVER_ID: PromiseOrValue<string>,
    USER_ID: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callback(
    _requestId: PromiseOrValue<BigNumberish>,
    _midpointId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    callMidpoint(
      SERVER_ID: PromiseOrValue<string>,
      USER_ID: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    callback(
      _requestId: PromiseOrValue<BigNumberish>,
      _midpointId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RequestMade(uint256,string,string)"(
      requestId?: null,
      SERVER_ID?: null,
      USER_ID?: null
    ): RequestMadeEventFilter;
    RequestMade(
      requestId?: null,
      SERVER_ID?: null,
      USER_ID?: null
    ): RequestMadeEventFilter;

    "ResponseReceived(uint256)"(requestId?: null): ResponseReceivedEventFilter;
    ResponseReceived(requestId?: null): ResponseReceivedEventFilter;
  };

  estimateGas: {
    callMidpoint(
      SERVER_ID: PromiseOrValue<string>,
      USER_ID: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    callback(
      _requestId: PromiseOrValue<BigNumberish>,
      _midpointId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callMidpoint(
      SERVER_ID: PromiseOrValue<string>,
      USER_ID: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    callback(
      _requestId: PromiseOrValue<BigNumberish>,
      _midpointId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}