import { Test, TestingModule } from '@nestjs/testing';
import { TreesResolver } from './trees.resolver';

describe('TreesResolver', () => {
  let resolver: TreesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreesResolver],
    }).compile();

    resolver = module.get<TreesResolver>(TreesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
