---
sidebar_position: 5
---

# How Hyperchain SDK Handles Addresses

The Hyperchain SDK provides a robust and flexible system for handling blockchain addresses through its `Address` class. This class leverages the Avalanche SDK for Bech32 encoding and offers various methods for creating, parsing, and manipulating addresses, ensuring compatibility with different authentication types and encoding formats.

## Address Structure

- Addresses are represented internally as `Uint8Array` of 33 bytes (`ADDRESS_LEN`).
- The first byte of the address indicates the authentication type (e.g., ED25519, SECP256R1, or BLS).
- The remaining `32 bytes` are derived from the public key using the `ToID` hashing function.

## Key Features of Address Handling

1. **Multiple Authentication Types**: The SDK supports multiple authentication types, including ED25519, SECP256R1, and BLS.

2. **Bech32 Encoding**: Addresses are typicacolly represented as Bech32-encoded strings for human readability and error detection. This is handled by the Avalanche SDK's utils module.

3. **Hex Encoding**: Addresses can also be represented and parsed in hexadecimal format.

4. **Byte Array Representation**: For efficient internal processing, addresses are stored and manipulated as byte arrays.

5. **Flexible Creation**: Addresses can be created from various formats, including byte arrays, Bech32 strings, and hexadecimal strings.

## Address Validation and Formatting

The SDK utilizes the Avalanche SDK for Bech32 encoding and decoding:

- `utils.formatBech32(hrp, address)`: Formats a byte array as a Bech32 address string.
- `utils.parseBech32(address)`: Parses a Bech32 address string into a byte array.

## Common Address Operations

- **Creating an Address**:

  ```typescript
  const address = Address.newAddress(authTypeID, publicKeyBytes);
  ```

- **Parsing a Bech32 Address**:

  ```typescript
  const address = Address.fromString(bech32AddressString);
  ```

- **Converting to Bech32 String**:

  ```typescript
  const bech32String = address.toString(hrp);
  ```

- **Converting to/from Hex**:

  ```typescript
  const hexAddress = address.toHex();
  const addressFromHex = Address.fromHex(hexString);
  ```

- **Getting Raw Bytes**:

  ```typescript
  const addressBytes = address.toBytes();
  ```
