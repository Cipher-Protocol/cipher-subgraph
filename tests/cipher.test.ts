import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { NewCommitment } from "../generated/schema"
import { NewCommitment as NewCommitmentEvent } from "../generated/Cipher/Cipher"
import { handleNewCommitment } from "../src/cipher"
import { createNewCommitmentEvent } from "./cipher-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let token = Address.fromString("0x0000000000000000000000000000000000000001")
    let commitment = BigInt.fromI32(234)
    let leafIndex = BigInt.fromI32(234)
    let newNewCommitmentEvent = createNewCommitmentEvent(
      token,
      commitment,
      leafIndex
    )
    handleNewCommitment(newNewCommitmentEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewCommitment created and stored", () => {
    assert.entityCount("NewCommitment", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewCommitment",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NewCommitment",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "commitment",
      "234"
    )
    assert.fieldEquals(
      "NewCommitment",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "leafIndex",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
