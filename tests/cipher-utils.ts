import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NewCommitment,
  NewNullifier,
  NewRelayer,
  NewTokenTree,
  RelayInfo,
  RelayerUpdated
} from "../generated/Cipher/Cipher"

export function createNewCommitmentEvent(
  token: Address,
  newRoot: BigInt,
  commitment: BigInt,
  leafIndex: BigInt
): NewCommitment {
  let newCommitmentEvent = changetype<NewCommitment>(newMockEvent())

  newCommitmentEvent.parameters = new Array()

  newCommitmentEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  newCommitmentEvent.parameters.push(
    new ethereum.EventParam(
      "newRoot",
      ethereum.Value.fromUnsignedBigInt(newRoot)
    )
  )
  newCommitmentEvent.parameters.push(
    new ethereum.EventParam(
      "commitment",
      ethereum.Value.fromUnsignedBigInt(commitment)
    )
  )
  newCommitmentEvent.parameters.push(
    new ethereum.EventParam(
      "leafIndex",
      ethereum.Value.fromUnsignedBigInt(leafIndex)
    )
  )

  return newCommitmentEvent
}

export function createNewNullifierEvent(
  token: Address,
  nullifier: BigInt
): NewNullifier {
  let newNullifierEvent = changetype<NewNullifier>(newMockEvent())

  newNullifierEvent.parameters = new Array()

  newNullifierEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  newNullifierEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromUnsignedBigInt(nullifier)
    )
  )

  return newNullifierEvent
}

export function createNewRelayerEvent(
  relayer: Address,
  relayerMetadataUri: string
): NewRelayer {
  let newRelayerEvent = changetype<NewRelayer>(newMockEvent())

  newRelayerEvent.parameters = new Array()

  newRelayerEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )
  newRelayerEvent.parameters.push(
    new ethereum.EventParam(
      "relayerMetadataUri",
      ethereum.Value.fromString(relayerMetadataUri)
    )
  )

  return newRelayerEvent
}

export function createNewTokenTreeEvent(
  token: Address,
  zeroValue: BigInt
): NewTokenTree {
  let newTokenTreeEvent = changetype<NewTokenTree>(newMockEvent())

  newTokenTreeEvent.parameters = new Array()

  newTokenTreeEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  newTokenTreeEvent.parameters.push(
    new ethereum.EventParam(
      "zeroValue",
      ethereum.Value.fromUnsignedBigInt(zeroValue)
    )
  )

  return newTokenTreeEvent
}

export function createRelayInfoEvent(
  sender: Address,
  relayerInfo: ethereum.Tuple,
  feeAmt: BigInt
): RelayInfo {
  let relayInfoEvent = changetype<RelayInfo>(newMockEvent())

  relayInfoEvent.parameters = new Array()

  relayInfoEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  relayInfoEvent.parameters.push(
    new ethereum.EventParam(
      "relayerInfo",
      ethereum.Value.fromTuple(relayerInfo)
    )
  )
  relayInfoEvent.parameters.push(
    new ethereum.EventParam("feeAmt", ethereum.Value.fromUnsignedBigInt(feeAmt))
  )

  return relayInfoEvent
}

export function createRelayerUpdatedEvent(
  relayer: Address,
  newRelayerMetadataUri: string
): RelayerUpdated {
  let relayerUpdatedEvent = changetype<RelayerUpdated>(newMockEvent())

  relayerUpdatedEvent.parameters = new Array()

  relayerUpdatedEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )
  relayerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newRelayerMetadataUri",
      ethereum.Value.fromString(newRelayerMetadataUri)
    )
  )

  return relayerUpdatedEvent
}
