describe('Buffer', () => {

	it('can writeUint8 and readUint8',() => {

		const value1 = 255;
		const value2 = 254;
		const value3 = 0;
		const value4 = 1;

		const buffer = new Buffer(4);
		buffer.writeUint8(value1);
		buffer.writeUint8(value2);
		buffer.writeUint8(value3);
		buffer.writeUint8(value4);

		expect(buffer.readUint8()).toEqual(value1);
		expect(buffer.readUint8()).toEqual(value2);
		expect(buffer.readUint8()).toEqual(value3);
		expect(buffer.readUint8()).toEqual(value4);
		
	});
	
	it('can writeUint16 and readUint16',() => {

		const value1 = 65535;
		const value2 = 2;
		const value3 = 65535;
		const value4 = 0;

		const buffer = new Buffer(8);
		buffer.writeUint16(value1);
		buffer.writeUint16(value2);
		buffer.writeUint16(value3);
		buffer.writeUint16(value4);

		expect(buffer.readUint16()).toEqual(value1);
		expect(buffer.readUint16()).toEqual(value2);
		expect(buffer.readUint16()).toEqual(value3);
		expect(buffer.readUint16()).toEqual(value4);
		
	});
	
	it('can writeUint32 and readUint32',() => {

		const value1 = 4294967295;
		const value2 = 254;
		const value3 = 394967295;
		const value4 = 1;

		const buffer = new Buffer(16);
		buffer.writeUint32(value1);
		buffer.writeUint32(value2);
		buffer.writeUint32(value3);
		buffer.writeUint32(value4);

		expect(buffer.readUint32()).toEqual(value1);
		expect(buffer.readUint32()).toEqual(value2);
		expect(buffer.readUint32()).toEqual(value3);
		expect(buffer.readUint32()).toEqual(value4);
		
	});
	
	it('can writeUint64 and readUint64',() => {

		const value1 = Number.MAX_SAFE_INTEGER;
		const value2 = 42;
		const value3 = Number.MAX_SAFE_INTEGER;
		const value4 = 1;

		const buffer = new Buffer(32);
		buffer.writeUint64(value1);
		buffer.writeUint64(value2);
		buffer.writeUint64(value3);
		buffer.writeUint64(value4);

		expect(buffer.readUint64()).toEqual(value1);
		expect(buffer.readUint64()).toEqual(value2);
		expect(buffer.readUint64()).toEqual(value3);
		expect(buffer.readUint64()).toEqual(value4);
		
	});

	
});