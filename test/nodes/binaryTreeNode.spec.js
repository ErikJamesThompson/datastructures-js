var expect = require('chai').expect,
    di = require('../../di');

describe('binaryTreeNode test', function() {

    'use strict';

    var binaryTreeNode = di.getBstNodeFactory(),
        root = binaryTreeNode(null, null, 50),
        left = binaryTreeNode(null, null, 30),
        right = binaryTreeNode(null, null, 70);

    root.setRight(right);
    root.setLeft(left);

    it('should access root', function() {
        expect(root.getValue()).to.be.equal(50);
        expect(root.getLeft().getValue()).to.be.equal(30);
        expect(root.getRight().getValue()).to.be.equal(70);
    });

    it('should access right', function() {
        expect(right.getValue()).to.be.equal(70);
        expect(right.getLeft()).to.be.equal(null);
        expect(right.getRight()).to.be.equal(null);
    });

    it('should access left', function() {
        expect(left.getValue()).to.be.equal(30);
        expect(left.getLeft()).to.be.equal(null);
        expect(left.getRight()).to.be.equal(null);
    });

    it('should export node api', function() {
        var exportedNode = root.export();
        expect(exportedNode.getValue()).to.be.equal(50);
        expect(exportedNode.getRight().getValue()).to.be.equal(70);
        expect(exportedNode.getLeft().getValue()).to.be.equal(30);
    });
});