"""changes in user table

Revision ID: 5ab09106897a
Revises: 0b76ea985d03
Create Date: 2024-10-29 15:10:10.037335

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '5ab09106897a'
down_revision: Union[str, None] = '0b76ea985d03'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('price', sa.Column('long_description', sa.String(), nullable=True))
    op.drop_column('price', 'long_descrption')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('price', sa.Column('long_descrption', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.drop_column('price', 'long_description')
    # ### end Alembic commands ###