import {
  NewCommitment as NewCommitmentEvent,
  NewNullifier as NewNullifierEvent,
  NewRelayer as NewRelayerEvent,
  NewTokenTree as NewTokenTreeEvent,
  RelayInfo as RelayInfoEvent,
  RelayerUpdated as RelayerUpdatedEvent
} from "../generated/Cipher/Cipher"
import {
  NewCommitment,
  NewNullifier,
  NewRelayer,
  NewRoot,
  NewTokenTree,
  RelayInfo,
  RelayerUpdated
} from "../generated/schema"

export function handleNewCommitment(event: NewCommitmentEvent): void {
  let entity = new NewCommitment(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.newRoot = event.params.newRoot
  entity.commitment = event.params.commitment
  entity.leafIndex = event.params.leafIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewNullifier(event: NewNullifierEvent): void {
  let entity = new NewNullifier(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.nullifier = event.params.nullifier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewRelayer(event: NewRelayerEvent): void {
  let entity = new NewRelayer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.relayer = event.params.relayer
  entity.relayerMetadataUri = event.params.relayerMetadataUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewTokenTree(event: NewTokenTreeEvent): void {
  let entity = new NewTokenTree(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.depth = event.params.depth
  entity.zeroValue = event.params.zeroValue
  entity.root = event.params.root

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRelayInfo(event: RelayInfoEvent): void {
  let entity = new RelayInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.relayerInfo_registeredAddr = event.params.relayerInfo.registeredAddr
  entity.relayerInfo_feeReceiver = event.params.relayerInfo.feeReceiver
  entity.relayerInfo_feeRate = event.params.relayerInfo.feeRate
  entity.feeAmt = event.params.feeAmt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRelayerUpdated(event: RelayerUpdatedEvent): void {
  let entity = new RelayerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.relayer = event.params.relayer
  entity.newRelayerMetadataUri = event.params.newRelayerMetadataUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
